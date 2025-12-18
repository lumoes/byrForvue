import { defineComponent, h } from 'vue'
import SenpaiMaleIcon from '@/assets/image/senpai-saying/senpai-male.svg'
import SenpaiFemaleIcon from '@/assets/image/senpai-saying/senpai-female.svg'
import SenpaiFemale2Icon from '@/assets/image/senpai-saying/senpai-female-2.svg'
import SenpaiFemale3Icon from '@/assets/image/senpai-saying/senpai-female-3.svg'
import SenpaiFemale4Icon from '@/assets/image/senpai-saying/senpai-female-4.svg'
import SenpaiFemale5Icon from '@/assets/image/senpai-saying/senpai-female-5.svg'

export const SenpaiMale = defineComponent({
    name: 'SenpaiMale',
    render() {
        return h('div', [
            h(SenpaiMaleIcon, { width: 275 })
        ])
    }
})

export const SenpaiFemale = defineComponent({
    name: 'SenpaiFemale',
    render() {
        return h('div', [
            h(SenpaiFemaleIcon, { width: 275 })
        ])
    }
})

export const SenpaiFemale2 = defineComponent({
    name: 'SenpaiFemale2',
    render() {
        return h('div', { class: 'my-8' }, [
            h(SenpaiFemale2Icon, { width: 275 })
        ])
    }
})

export const SenpaiFemale3 = defineComponent({
    name: 'SenpaiFemale3',
    render() {
        return h('div', { class: 'my-8' }, [
            h(SenpaiFemale3Icon, { width: 275 })
        ])
    }
})

export const SenpaiFemale4 = defineComponent({
    name: 'SenpaiFemale4',
    render() {
        return h('div', [
            h(SenpaiFemale4Icon, { width: 275 })
        ])
    }
})

export const SenpaiFemale5 = defineComponent({
    name: 'SenpaiFemale5',
    render() {
        return h('div', { class: 'my-8' }, [
            h(SenpaiFemale5Icon, { width: 275 })
        ])
    }
})
