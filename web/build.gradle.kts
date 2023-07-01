import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig
import org.jetbrains.kotlin.incremental.deleteDirectoryContents

plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}

group = "com.charleex.website"
version = libs.versions.appVersion.get()

kotlin {
    wasm {
        moduleName = "wasmapp"
        browser {
            commonWebpackConfig {
                devServer = (devServer ?: KotlinWebpackConfig.DevServer()).copy(
//                    open = mapOf(
//                        "app" to mapOf(
//                            "name" to "google chrome canary",
//                            "arguments" to listOf("--js-flags=--experimental-wasm-gc ")
//                        )
//                    ),
                    static = (devServer?.static ?: mutableListOf()).apply {
                        // Serve sources to debug inside browser
                        add(project.rootDir.path)
                        add(project.rootDir.path + "/common/")
                        add(project.rootDir.path + "/nonAndroidMain/")
                        add(project.rootDir.path + "/web/")
                    },
                )
            }
        }
        binaries.executable()
//        applyBinaryen()
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                api(compose.runtime)
                api(compose.foundation)
                api(compose.material)
                implementation(projects.ui)
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
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

val docsDir = "$rootDir/docs"

tasks.register("copyWasmAppToDocs") {
    group = "kotlin browser"
    dependsOn("copyDistToDocs")
    doLast {
        copy {
            from("$buildDir/compileSync/wasm/main/productionExecutable/kotlin/wasmapp.uninstantiated.mjs")
            into(docsDir)
        }
    }
}

tasks.register("copyDistToDocs") {
    group = "kotlin browser"
    dependsOn("wasmBrowserProductionWebpack")
    doLast {
        copy {
            from("$buildDir/dist/wasm/productionExecutable")
            into(docsDir)
        }
    }
}

tasks.register("copyFaviconToDocs") {
    group = "kotlin browser"
    dependsOn("copyWasmAppToDocs")
    doLast {
        copy {
            from("$rootDir/kotlin-js-store/favicon.ico")
            into(docsDir)
        }
    }
}
