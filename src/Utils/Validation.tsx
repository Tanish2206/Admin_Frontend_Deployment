// validation.js




export const validateEmail = (email: string): string => {
  if (!email) {
    return "Email is required.";
  }

  // Email validation regex pattern
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!emailRegex.test(email)) {
    return "Invalid email address.";
  }

  return "";
};

// customValidations.js
export const validatePassword = (password:any):any => {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password should be at least 8 characters long";
  }

  if (!/\d/.test(password)) {
    return "Password should contain at least one digit";
  }

  if (!/[!@#$%^&*]/.test(password)) {
    return "Password should contain at least one special character";
  }

  return "";
};

export const isValidEmail = (email: string) => {
  // Add your email validation logic here
  // This is a basic example
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const isValidMobile = (mobile: string) => {
  // Add your mobile number validation logic here
  // This is a basic example
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
};

// export const validateImageFiles = (files: string | any[]) => {
//     const allowedTypes = ["image/jpeg", "image/png"];
//     const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
  
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
  
//       if (!allowedTypes.includes(file.type)) {
//         return `Invalid file type for image ${i + 1}. Only JPEG and PNG are allowed.`;
//       }
  
//       if (file.size > maxSizeInBytes) {
//         return `Image ${i + 1} size exceeds the maximum allowed limit of 5MB.`;
//       }
//     }
  
//     return null; // Validation passed
//   };
  
//   export const validateVideoFiles = (files: string | any[]) => {
//     const allowedTypes = ["video/mp4"];
//     const maxSizeInBytes = 50 * 1024 * 1024; // 50MB
  
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
  
//       if (!allowedTypes.includes(file.type)) {
//         return `Invalid file type for video ${i + 1}. Only MP4 videos are allowed.`;
//       }
  
//       if (file.size > maxSizeInBytes) {
//         return `Video ${i + 1} size exceeds the maximum allowed limit of 50MB.`;
//       }
//     }
  
//     return null; // Validation passed
//   };
  