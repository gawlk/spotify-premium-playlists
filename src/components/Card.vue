<template>
    <a
        rel="noopener noreferrer"
        target="_blank"
        :href="props.playlist.url"
        class="transform duration-200 ease-in-out hover:-translate-y-1"
    >
        <img
            ref="image"
            :style="`height: ${height}px`"
            class="w-full h-auto rounded-lg object-cover cosha"
            :src="props.playlist.artwork"
            @load="updateImage"
        />
        <div class="text-xs font-medium -space-y-0.5 px-1">
            <p class="truncate font-bold">
                {{ props.playlist.name }}
            </p>
            <p class="truncate opacity-50">
                {{ props.playlist.curator }}
            </p>
        </div>
    </a>
</template>

<script setup>
    import { defineProps } from 'vue'
    import { coshaUpdateImage } from '/src/js/cosha'

    const props = defineProps({
        playlist: Object,
    })

    ref: image

    ref: height = 0

    const updateImage = () => {
        if (image) {
            height = image.clientWidth
            coshaUpdateImage(image)
        }
    }

    window.addEventListener('resize', updateImage)
</script>
