<template>
    <div class="w-full flex flex-col">
        <div class="relative flex items-center rounded-full h-11">
            <input
                :id="id"
                class="bg-white block w-full h-full pl-4 pr-20 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-gray-900 border-gray-300 placeholder:text-gray-400"
                :name="id"
                :value="modelValue"
                :placeholder="placeholder"
                @keyup.enter="$emit('search')"
                @input="$emit('update:modelValue', $event.target.value)" />
            <button class="absolute right-1 flex items-center justify-center rounded-full w-14 h-8 sm:h-9 bg-secondary hover:bg-secondary/90 shadow cursor-pointer transition-all"
                @click="$emit('search')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: String, required: true },
            modelValue: { default: '' },
            placeholder: { type: String, default: '' },
        },
    }
</script>