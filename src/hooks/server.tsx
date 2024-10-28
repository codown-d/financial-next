export const useFundModal = () => {
  let getFundModal = () => {
    TzConfirm({
      footer: null,
      content: <FundContent />,
    });
  };
  return { getFundModal };
};