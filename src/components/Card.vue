<template>
    <a
        rel="noopener noreferrer"
        target="_blank"
        :href="playlist.url"
        class="transform duration-200 ease-in-out hover:-translate-y-1"
    >
        <img
            ref="image"
            :style="`height: ${height}px`"
            class="w-full h-auto rounded-lg object-cover cosha"
            :src="playlist.artwork"
            @load="updateImage('image-' + playlist._id)"
        />
        <div class="text-xs font-medium -space-y-0.5 px-1">
            <p class="truncate font-bold">
                {{ playlist.name }}
            </p>
            <p class="truncate opacity-50">
                {{ playlist.curator }}
            </p>
        </div>
    </a>
</template>

<script setup="props">
    import { ref, watchEffect } from 'vue'
    import { coshaUpdateImage } from '/src/js/cosha'

    export default {
        props: {
            playlist: Object,
        },
    }

    export const image = ref()

    export const height = ref(0)

    export const updateImage = (id) => {
        height.value = image.value.clientWidth
        coshaUpdateImage(image.value)
    }

    window.addEventListener('resize', () => {
        if (height.value > 0) {
            height.value = image.value.clientWidth
        }
    })
</script>
