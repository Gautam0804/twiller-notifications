export const requestPermission = async (): Promise<void> => {
  if (!("Notification" in window)) return;

  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }
};

export const showNotification = (tweet: string): void => {
  if (Notification.permission !== "granted") return;

  new Notification("Keyword Tweet 🔔", {
    body: tweet,
  });
};
