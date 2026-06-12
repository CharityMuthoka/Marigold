import { useState } from "react";
import {
  MessageCircle,
  Send,
  X,
  Smile,
  Paperclip,
  Headset,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

const emojis = ["😊", "😍", "🎉", "✨", "💐", "🥂", "❤️", "👍"];

  const sendToWhatsApp = (customMessage?: string) => {
    const message =
      customMessage ||
      input.trim() ||
      "Hello Marigold & Ember, I would like to ask about event planning.";

    const url = `${API_URL}/api/book-call?message=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-primary-foreground shadow-glow transition-transform hover:scale-110"
        aria-label="Open chat"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-glow">          <div className="flex items-start justify-between bg-white px-5 py-4 text-foreground">
            <div>
              <h3 className="text-2xl font-semibold leading-none">
                Let&apos;s Chat!
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                <span>Online</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-muted"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

   

          <div className="h-[17rem] overflow-y-auto bg-blue-700 px-5 py-5">
            

            <div className="flex items-end gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-foreground shadow-sm">
                M&E
              </div>

              <div className="max-w-[80%] rounded-xl bg-black/90 px-3 py-2 text-sm leading-relaxed text-white shadow-soft">
                <p className="mb-1 text-xs font-semibold text-white/70">
                  Marigold & Ember
                </p>
                <p>
                  Hi there 👋 Welcome to Marigold & Ember. Tell us your event
                  type, date, location, guest count, and budget.
                </p>
              </div>
            </div>

{/*
            <div className="mt-5 space-y-2">
              <button
                onClick={() =>
                  sendToWhatsApp(
                    "Hello Marigold & Ember, I would like to get a quote for my event."
                  )
                }
                className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                Get a quote
              </button>

              <button
                onClick={() =>
                  sendToWhatsApp(
                    "Hello Marigold & Ember, I would like to check your availability for an upcoming event."
                  )
                }
                className="ml-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                Check availability
              </button>
            </div>
            */}
          </div>

          {showEmojiPicker && (
  <div className="border-t border-border bg-white px-4 py-3">
    <div className="flex flex-wrap gap-2">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          type="button"
          onClick={() => {
            setInput((current) => current + emoji);
            setShowEmojiPicker(false);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-lg transition-colors hover:bg-background"
        >
          {emoji}
        </button>
      ))}
    </div>
  </div>
)}

          <div className="flex items-center gap-2 border-t border-border bg-white px-4 py-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendToWhatsApp();
              }}
              placeholder="Write your message..."
              className="flex-1 bg-transparent text-sm outline-none"
            />

<button
  type="button"
  onClick={() => setShowEmojiPicker((value) => !value)}
  className="text-muted-foreground transition-colors hover:text-foreground"
  aria-label="Emoji"
>
  <Smile className="h-5 w-5" />
</button>

{/*
            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Attach file"
            >
              <Paperclip className="h-5 w-5" />
            </button>

            */}

            <button
              onClick={() => sendToWhatsApp()}
              disabled={!input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-primary-foreground disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}