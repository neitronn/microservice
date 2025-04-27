import Message from "components/message/message"
import { Text } from "@telegram-apps/telegram-ui"
import { backgroundColor } from "@telegram-apps/sdk/dist/dts/scopes/components/secondary-button/signals"

export default function Home(){
    return (
        <div  style={{ backgroundColor: '#444444' }}>
            <Message>
                <Text>fdfg</Text>
            </Message>
        </div>
    )
}