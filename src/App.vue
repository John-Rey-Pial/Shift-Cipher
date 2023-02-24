<template>
    <v-app>
        <v-main>
            <Shift />
        </v-main>
    </v-app>
</template>

<script>
import Shift from "./components/NewShift";

export default {
    name: "App",

    components: {
        Shift,
    },

    data: () => ({
        //
    }),
};
</script>
