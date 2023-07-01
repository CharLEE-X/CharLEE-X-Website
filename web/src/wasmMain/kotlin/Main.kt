import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.LinearProgressIndicator
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.platform.Font
import androidx.compose.ui.window.CanvasBasedWindow
import com.charleex.website.ui.AppWasm
import com.charleex.website.ui.theme.Karla
import com.charleex.website.ui.theme.Montserrat
import util.loadResource
import util.toByteArray

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
            loadMontserratFont()
            loadKarlaFont()
            loading = false
        }
    }
}

private suspend fun loadMontserratFont() {
    val regular = loadResource("/fonts/montserrat_regular.ttf").toByteArray()
    val medium = loadResource("/fonts/montserrat_medium.ttf").toByteArray()
    val light = loadResource("/fonts/montserrat_light.ttf").toByteArray()
    val semiBold = loadResource("/fonts/montserrat_semibold.ttf").toByteArray()

    Montserrat = FontFamily(
        Font(identity = "MontserratRegular", data = regular, weight = FontWeight.Normal),
        Font(identity = "MontserratMedium", data = medium, weight = FontWeight.Medium),
        Font(identity = "MontserratLight", data = light, weight = FontWeight.Light),
        Font(identity = "MontserratSemiBold", data = semiBold, weight = FontWeight.SemiBold),
    )
}

private suspend fun loadKarlaFont() {
    val regular = loadResource("/fonts/karla_regular.ttf").toByteArray()
    val bold = loadResource("/fonts/karla_bold.ttf").toByteArray()

    Karla = FontFamily(
        Font(identity = "KarlaRegular", data = regular, weight = FontWeight.Normal),
        Font(identity = "KarlaBold", data = bold, weight = FontWeight.Bold),
    )
}
