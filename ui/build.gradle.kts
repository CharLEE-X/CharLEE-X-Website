import org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalWasmDsl

plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}

group = "com.charleex.website.ui"
version = libs.versions.appVersion.get()

kotlin {
    @OptIn(ExperimentalWasmDsl::class)
    wasm {
        browser()
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material)
                implementation(compose.animation)
                implementation(compose.animationGraphics)
            }
        }
    }
}

compose.experimental {
    web.application {}
}

compose {
    val composeVersion = libs.versions.composeMultiplatform.get()
    kotlinCompilerPlugin.set(composeVersion)
    val kotlinVersion = libs.versions.kotlin.get()
    kotlinCompilerPluginArgs.add("suppressKotlinVersionCompatibilityCheck=$kotlinVersion")
}
