package com.charleex.website.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.charleex.website.ui.theme.CharLEEXTheme

@Composable
internal fun CharLEEXApp() {
    CharLEEXTheme {
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier.fillMaxSize()
        ) {
            Text("Hello, CharLEE-X Website!")
        }
    }
}
