import './style.css';
import liff from '@line/liff';

// const app = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement;
const shopUrl = "https://liff.base.ec";

liff
  .init({
    liffId: import.meta.env.VITE_LIFF_ID,
    withLoginOnExternalBrowser: true
  })
  .then(() => {
    const idToken = liff.getDecodedIDToken();
    const lineId = idToken?.sub;
    document.location.href = `${shopUrl}?line_id=${lineId}`;
  })
  .catch((_error: Error) => {
    document.location.href = shopUrl;
  });
