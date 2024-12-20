import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { SendButton } from './SendButton';
import { AudioButton } from './AudioButton';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  onStartRecording,
  onStopRecording,
  isRecording,
  disabled
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[399px] h-[76px] bg-white rounded-b-[16px] p-4 flex items-center gap-2">
      <TextInput
        value={message}
        onChange={setMessage}
        onKeyPress={handleKeyPress}
        disabled={disabled}
      />
      <SendButton
        onClick={handleSubmit}
        disabled={!message.trim() || disabled}
      />
      <AudioButton
        onClick={isRecording ? onStopRecording : onStartRecording}
        isRecording={isRecording}
        disabled={disabled}
      />
    </form>
  );
};