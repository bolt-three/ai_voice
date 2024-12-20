import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  onKeyPress,
  disabled
}) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyPress={onKeyPress}
    placeholder="Type your message..."
    className="flex-1 bg-white text-[#F4EFED] placeholder-[#6B6B6B] resize-none focus:outline-none h-[44px] px-4 py-2 rounded-lg"
    rows={1}
    disabled={disabled}
  />
);