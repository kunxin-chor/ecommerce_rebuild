import { useFlashMessage } from "./FlashMessageStore";
import { useEffect } from "react";

let timeoutId = null;

export default function FlashMessage() {
    const { flashMessage } = useFlashMessage();

    return <>
        {
            flashMessage.message && (
                <div className={`flash-alert alert alert-${flashMessage.type}`}>
                    {flashMessage.message}
                </div>
            )
        }
    </>
}