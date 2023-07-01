import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.LinearProgressIndicator
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.CanvasBasedWindow
import com.charleex.website.ui.AppWasm

/**
 * Launches the CharLEE-X Website application by creating a canvas-based window.
 */
@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    CanvasBasedWindow("CharLEE-X", canvasElementId = "charleexCanvas") {
        var loading: Boolean by remember { mutableStateOf(true) }

        if (loading) {
            LinearProgressIndicator(modifier = Modifier.fillMaxWidth())
        } else {
            AppWasm()
        }

        LaunchedEffect(Unit) {
            loading = false
        }
    }
}
