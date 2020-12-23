<template>
    <div class="flex-1 relative flex space-x-1">
        <div class="w-full">
            <Input
                :value="input"
                @input="process($event.target.value)"
                placeholder="Write a genre here"
            />
            <ListboxOptions
                :elements="genres"
                :open="genres.length > 0"
                @selectIndex="select"
                class="w-48"
            />
        </div>
        <ButtonReset @click="process('')" />
    </div>
</template>

<script setup>
    import { onMounted, defineEmit } from 'vue'

    import { fetchGQL, getParams, setParam } from '/src/js/utils'

    import ButtonReset from '../buttons/ButtonReset.vue'
    import ListboxOptions from '../listboxes/ListboxOptions.vue'
    import Input from './Input.vue'

    const emit = defineEmit()

    ref: input = ''

    ref: allGenres = []

    ref: genres = []

    onMounted(async () => {
        input = getParams().value

        allGenres = (
            await fetchGQL(`
                {
                    allGenres(_size: 100000) {
                        data {
                            name
                        }
                    }
                }
            `)
        ).data.allGenres.data
            .map((x) => x.name)
            .sort()

        window.addEventListener('popstate', async () => {
            input = getParams().value
        })
    })

    const select = (index) => {
        input = genres[index]
        emit('update', { value: genres[index] })
        genres = []
    }

    const process = (value) => {
        input = value

        if (value) {
            genres = allGenres.filter((genre) =>
                genre.toLowerCase().includes(value.toLowerCase())
            )
        } else {
            genres = []
            emit('reset')
        }
    }
</script>
