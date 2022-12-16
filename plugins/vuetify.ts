import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const DarkTheme: ThemeDefinition = {
    dark: true,
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'DarkTheme',
            themes: {
                DarkTheme,
            },
        },
        ssr: true,
    })

    nuxtApp.vueApp.use(vuetify)
})