import React, { useState, ChangeEvent } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaWithText() {
  const [text, setText] = useState<string>(''); 

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); 
  };

  return (
    <div className="grid w-1/2 gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea
        placeholder="Type your message here."
        id="message-2"
        value={text}
        onChange={handleChange} 
      />
      <p className="text-sm text-muted-foreground">
        Current Text: {text}
      </p>
    </div>
  );
}

export default TextareaWithText; 
