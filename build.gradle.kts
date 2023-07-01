import io.gitlab.arturbosch.detekt.Detekt
import io.gitlab.arturbosch.detekt.DetektCreateBaselineTask
import org.jlleitschuh.gradle.ktlint.KtlintExtension

plugins {
    kotlin("multiplatform") version libs.versions.kotlin apply false
    id("org.jetbrains.compose") version libs.versions.composeMultiplatform apply false
    id("io.gitlab.arturbosch.detekt") version libs.versions.detekt
    id("org.jlleitschuh.gradle.ktlint") version libs.versions.ktLint
}

group = "com.charleex"
version = libs.versions.appVersion.get()

allprojects {
    repositories {
        google()
        mavenCentral()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
        maven("https://maven.pkg.jetbrains.space/kotlin/p/wasm/experimental")
    }

    configurations.all {
        val conf = this
        conf.resolutionStrategy.eachDependency {
            val isWasm = conf.name.contains("wasm", true)
            val isJs = conf.name.contains("js", true)
            val isComposeGroup = requested.module.group.startsWith("org.jetbrains.compose")
            val isComposeCompiler = requested.module.group.startsWith("org.jetbrains.compose.compiler")
            if (isComposeGroup && !isComposeCompiler && !isWasm && !isJs) {
                val composeVersion = libs.versions.composeMultiplatform.get()
                useVersion(composeVersion)
            }
            if (requested.module.name.startsWith("kotlin-stdlib")) {
                val kotlinVersion = libs.versions.kotlin.get()
                useVersion(kotlinVersion)
            }
        }
    }

    apply(plugin = "org.jlleitschuh.gradle.ktlint")
    configure<KtlintExtension> {
        filter {
            exclude { element -> element.file.path.contains("/build/") }
        }
        debug.set(false)
        outputToConsole.set(true)
    }

    apply(plugin = "io.gitlab.arturbosch.detekt")
    detekt {
        parallel = true
        config.setFrom(files(rootProject.file("tools/detekt/config.yml")))
        autoCorrect = true
    }

    tasks.withType<Detekt>().configureEach {
//        jvmTarget = ProjectConfig.Kotlin.jvmTarget
        parallel = true
        reports {
            xml.required.set(false)
            html.required.set(false)
            txt.required.set(false)
            sarif.required.set(false)
        }
        exclude { it.file.absolutePath.contains("resources/") }
        exclude { it.file.absolutePath.contains("build/") }
        include("**/*.kt")
    }

    tasks.withType<DetektCreateBaselineTask>().configureEach {
//        this.jvmTarget = ProjectConfig.Kotlin.jvmTarget
        exclude { it.file.absolutePath.contains("resources/") }
        exclude { it.file.absolutePath.contains("build/") }
        include("**/*.kt")
    }

    tasks.register("detektAll") {
        group = "verification"
        description = "Runs all detekt tasks"
        dependsOn(tasks.withType<Detekt>())
    }
}
