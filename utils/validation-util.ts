export const validateRequiredField = (fieldName: string) => {
  return {
    required: {
      value: true,
      message: `The ${fieldName} is required`,
    },
  };
};
