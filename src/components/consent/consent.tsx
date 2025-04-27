import { Headline } from "@telegram-apps/telegram-ui"


export default function Consent(){
    return (
        <Headline weight="2">Я согласен с <a href='/termsUse'>Условиями использования</a> и <a href='/privacyPolicy'>Политика конфиденциальности</a></Headline>
    )
}