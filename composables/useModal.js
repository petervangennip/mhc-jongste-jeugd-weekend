import { reactive } from 'vue';
export default function () {
  const modal = reactive({ open: false, id: '', title: '' });

  const modalClose = () => {
    modal.open = false;
  };

  const modalOpen = () => {
    modal.open = !modal.open;
  };

  return { modal, modalClose, modalOpen };
}
