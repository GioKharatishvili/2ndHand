import Swal from "sweetalert2";

export const notSignedInError = () => {
  Swal.fire({
    icon: "error",
    title: "Please sign in first.",
    confirmButtonText: "OK",
  });
};

export const signInErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Sign In Unsuccessful",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const signInSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Sign In Successful!",
    confirmButtonText: "OK",
  }).then(() => {
    window.location.href = "/";
  });
};

export const registerSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Registration Successful!",
    text: "Please sign in to continue.",
    confirmButtonText: "OK",
  }).then(() => {
    window.location.href = "../signin";
  });
};

export const errorLogOutSuccessAlert = () => {
  Swal.fire({
    icon: "error",
    title: "You are being logged out due to an error. Please log in again.",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const logOutSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Log Out Successful!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const updateInfoSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Information Updated Successfully!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const updateInfoErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Information Update Unsuccessful",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const addItemSuccessAlert = (item) => {
  Swal.fire({
    icon: "success",
    title: `${item} Added Successfully!`,
    confirmButtonText: "OK",
  });
};

export const addItemErrorAlert = (item) => {
  Swal.fire({
    icon: "error",
    title: `Error Adding ${item}`,
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const fetchingProductDataSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Product Data Fetched Successfully!",
    confirmButtonText: "OK",
  });
};

export const fetchingProductInfoErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error Fetching Product Information",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const productNotFoundErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Product Not Found",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const updateProductSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Product Updated Successfully!",
    confirmButtonText: "OK",
  });
};

export const updateProductErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: `Error Updating Product`,
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const deleteItemSuccessAlert = (item) => {
  Swal.fire({
    icon: "success",
    title: `${item} Deleted Successfully!`,
    confirmButtonText: "OK",
  });
};

export const deleteItemErrorAlert = (item) => {
  Swal.fire({
    icon: "error",
    title: `Error Deleting ${item}`,
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const deleteEveryItemConfirmation = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  return result;
};

export const emptyIdErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Empty id found",
    text: "Please fill in every field.",
    confirmButtonText: "OK",
  });
};

export const cartItemAddSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Product Added To Cart Successfully!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const cartItemAddErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Unable To Add Product To Cart",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const cartItemRemoveSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Product Deleted From Cart Successfully!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const cartItemRemoveErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: `Error Deleting Item From Cart`,
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const cartClearSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Cart Cleared Successfully!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const cartClearErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error Clearing Cart",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const likedItemAddErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error Liking Item",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const likedItemRemoveErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error Removing Liked Item",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const purchaseConfirmation = async () => {
  const result = await Swal.fire({
    title: "Are you sure you want to purhcase these items?",
    text: "The cart will also be cleared.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0c0",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  });

  return result;
};

export const purchaseSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Purchased Item(s) Successfully!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const purchaseErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error Purchasing Item(s)",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};

export const purchaseRemovalSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Purchase Removed Successfully!",
    confirmButtonText: "OK",
  }).then(() => window.location.reload());
};

export const purchaseRemovalErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Error Removed Purchase",
    text: "Please try again.",
    confirmButtonText: "OK",
  });
};
