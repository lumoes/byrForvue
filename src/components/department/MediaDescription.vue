<template>
    <section class="overflow-hidden rounded-xl border-[0.5px] bg-[#F6F8FC]">
        <header
            class="flex h-[75px] items-center justify-between border-b-[0.5px] px-4 text-[#333] max-sm:py-2 sm:py-4">
            <div class="text-2xl leading-[180%] tracking-[4.8px]">
                🎉招新啦🎉
            </div>
            <div class="cursor-pointer p-1">
                <IconDots width="32" height="32" class="opacity-40" />
            </div>
        </header>

        <div class="h-[394px] w-full overflow-auto">
            <article :class="['flex flex-col gap-3 px-3 pb-10 pt-2', $style.MediaBG]">
                <WechatDialog class="self-end" name="You" time="05:04 PM" :avatar="PurpleMonster" :is-you="true">
                    <Chat :is-last="true" :is-you="true">
                        新媒体组好酷啊！好想加！！❤
                    </Chat>
                </WechatDialog>

                <div class="text-center leading-[180%] opacity-60 max-sm:text-xs sm:text-base">
                    北邮人团队 新媒体组 拍了拍 你，并发送了一条加群邀请
                </div>

                <WechatDialog class="self-start" name="新媒体组某不知名成员壹" time="05:06 PM" :avatar="BlueCutie" :is-you="false">
                    <Chat>Hi，欢迎来到有趣灵魂聚集地新媒体组！ 我们是——</Chat>
                    <Chat>＃生活观察员＃</Chat>
                    <Chat class="max-w-[640px]">
                        在这里，与你同行，写你所想。<br />
                        我们驻守在官方新媒体平台，捕捉校园生活中的小确幸、小美好，以图文定格北邮人的独家记忆。
                    </Chat>
                    <Chat class="w-full" :is-last="true">
                        <div
                            class="flex justify-between max-sm:flex-col [&>div]:flex [&>div]:flex-col [&>div]:gap-[2px]">
                            <div>
                                <ChalkSpan content="#春日邮啊邮：" />
                                <WechatArticleLink href="https://mp.weixin.qq.com/s/vI0UQ144QMib4nX00E_mNw"
                                    content="藏在北三环里的小众宝藏打卡地" />
                                <WechatArticleLink href="https://mp.weixin.qq.com/s/ADSExMLzODeZxSbGP_Lg2Q"
                                    content="北六环约会圣地，城区40min可达" />
                                <WechatArticleLink href="https://mp.weixin.qq.com/s/lC57Iya44k2g7KoiVcjtMw"
                                    content="春日邮花图鉴" />
                            </div>
                            <div>
                                <ChalkSpan content="#北邮爱情故事：" />
                                <WechatArticleLink href="https://mp.weixin.qq.com/s/Fg4ETkdX0Z1qlUBazAE7DA"
                                    content="BYR七夕不规则访谈" />
                                <WechatArticleLink href="https://mp.weixin.qq.com/s/oGQ9BGFT-Lt0YjMN4RoVGg"
                                    content="BYR520约会方式一览" />
                            </div>
                        </div>
                    </Chat>
                </WechatDialog>

                <WechatDialog class="self-start" name="新媒体组某不知名成员贰" time="05:12 PM" :avatar="Dinosaur" :is-you="false">
                    <Chat>我们也是——</Chat>
                    <Chat>＃浪漫的幻想家＃</Chat>
                    <Chat class="max-w-[640px]">
                        在这里，梦境碰撞现实，一切皆有可能。<br />
                        我们点燃灵感的焰火，将天马行空的脑洞付诸笔下，摘星揽月、逐光织梦。
                    </Chat>
                    <Chat :is-last="true">
                        <WechatArticleLink href="https://mp.weixin.qq.com/s/SPhbDiPZIETY8QqiC4rwSw"
                            content="世界破破烂烂，小动物缝缝补补" />
                        <WechatArticleLink href="https://mp.weixin.qq.com/s/HCklNWP5T37ukMYtgPVYpg"
                            content="超能力与副作用的化学反应" />
                    </Chat>
                </WechatDialog>
            </article>
        </div>

        <footer class="bg-white p-4">
            <div
                class="flex items-center justify-between rounded-full bg-[#F6F8FC] text-black/40 max-md:px-6 max-md:py-[6px] md:px-11 md:py-3">
                <div
                    class="border-r-[2px] max-sm:pr-3 sm:pr-6 [&>svg]:cursor-pointer [&>svg]:max-sm:h-5 [&>svg]:max-sm:w-5">
                    <IconPin />
                </div>
                <input
                    class="min-w-0 bg-transparent py-[3px] outline-none placeholder:tracking-[2.16px] max-sm:shrink max-sm:px-4 sm:grow sm:px-7"
                    type="text" placeholder="请输入..." />
                <div
                    class="flex justify-between gap-4 sm:gap-5 md:gap-7 [&>svg]:cursor-pointer [&>svg]:max-sm:h-6 [&>svg]:max-sm:w-6">
                    <IconSmile />
                    <IconPhoto />
                    <IconLocation />
                </div>
            </div>
        </footer>
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import type { Component } from 'vue'
import IconDots from "@/assets/image/department/media/icon-dots.svg?component";
import PurpleMonster from "@/assets/image/department/media/avatar-purple-monster.svg?component";
import BlueCutie from "@/assets/image/department/media/avatar-blue-cutie.svg?component";
import Dinosaur from "@/assets/image/department/media/avatar-dinosaur.svg?component";
import IconSmile from "@/assets/image/department/media/icon-smile.svg?component";
import IconPhoto from "@/assets/image/department/media/icon-photo.svg?component";
import IconLocation from "@/assets/image/department/media/icon-location.svg?component";
import IconPin from "@/assets/image/department/media/icon-pin.svg?component"

// 子组件定义

import Chat from './Chat.vue'
import WechatDialog from './WechatDialog.vue'
import WechatArticleLink from './WechatArticleLink.vue'
import ChalkSpan from './ChalkSpan.vue'

</script>

<style module lang="scss">
.MediaBG {
    background-image: url('~@/assets/image/department/media/star-bg.svg');
    background-position-x: center;
    background-position-y: top;
    background-repeat: repeat-y;
    @apply bg-[520px_auto] sm:bg-[820px_auto] lg:bg-[960px_auto];
}
</style>
