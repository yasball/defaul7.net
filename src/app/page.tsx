"use client";

import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import BlurText from "@/components/BlurText/BlurText";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import Iridescence from "@/components/Iridescence/Iridescence";

// const MAIN_TEXT = "self-hosted.chat";
const MAIN_TEXT = "defaul7.net";
const SOCIAL_DELAY = 3_300;

export default function Home() {
    return (
        <div className="flex h-svh w-full flex-col items-center justify-center bg-neutral-950">
            <div className="absolute z-0 h-full w-full">
                <div className="relative h-full w-full">
                    <Iridescence
                        color={[0.3, 0.3, 0.3]}
                        mouseReact={false}
                        amplitude={0.5}
                        speed={0.5}
                    />
                </div>
            </div>

            <div className="z-10 flex flex-col items-center gap-6">
                <BlurText
                    text={MAIN_TEXT}
                    delay={250}
                    animateBy="letters"
                    direction="bottom"
                    className="text-[2rem] font-extrabold text-white md:text-[4rem] lg:text-[5rem]"
                />

                <div className="flex items-center gap-6">
                    <AnimatedContent
                        distance={150}
                        delay={SOCIAL_DELAY}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={0}
                        threshold={0.5}
                    >
                        <a
                            href="https://t.me/defaul7btw"
                            className="text-white [&:hover_svg]:scale-120"
                        >
                            <TelegramIcon className="h-6 w-6 transition" />
                        </a>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        delay={SOCIAL_DELAY}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={0}
                        threshold={0.5}
                    >
                        <a
                            href="https://www.instagram.com/yasball/"
                            className="text-white [&:hover_svg]:scale-120"
                        >
                            <InstagramIcon className="h-6 w-6 transition" />
                        </a>
                    </AnimatedContent>
                </div>
            </div>
        </div>
    );
}
