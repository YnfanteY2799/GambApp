export type BasicContactForm = {
  name: string;
  email: string;
  message: string;
};

export type BlurPropped = (EventTarget & HTMLInputElement) | HTMLTextAreaElement;
