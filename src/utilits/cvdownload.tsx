/**
 * Utility function to download files
 * @param filePath - Path to the file in public folder
 * @param fileName - Name for the downloaded file
 */
export const downloadFile = (filePath: string, fileName: string): void => {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Predefined CV download function
 */
export const downloadCV = (): void => {
  downloadFile('/files/Pema Dorji Sherpa CV.pdf', 'Pema_Dorji_Sherpa_CV.pdf');
};