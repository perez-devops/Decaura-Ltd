/* ══════════════════════════════════════════════════════════
   DECAURA – Contact Form Handler
   Sends form submissions to info@decaurastudio.com via Web3Forms
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

    const form = document.getElementById('project-form');
    const modal = document.getElementById('form-modal');

    const showModal = ({ success }) => {
        if (!modal) return;
        const icon = document.getElementById('form-modal-icon');
        const title = document.getElementById('form-modal-title');
        const message = document.getElementById('form-modal-message');

        if (success) {
            icon.className = 'form-modal-icon fas fa-check';
            title.textContent = 'Thank You';
            message.textContent = 'Your project introduction has been received. Our team will review your submission and be in touch shortly.';
        } else {
            icon.className = 'form-modal-icon fas fa-exclamation-triangle';
            title.textContent = 'Submission Failed';
            message.textContent = 'Something went wrong while sending your message. Please try again or email us directly at info@decaurastudio.com.';
        }

        modal.classList.add('is-open');
    };

    const hideModal = () => modal?.classList.remove('is-open');

    document.getElementById('form-modal-close')?.addEventListener('click', hideModal);
    document.getElementById('form-modal-ok')?.addEventListener('click', hideModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';

        try {
            const formData = new FormData(form);

            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            const result = await response.json();

            if (response.ok && result.success) {
                submitBtn.textContent = 'SUBMITTED SUCCESSFULLY ✓';
                submitBtn.style.backgroundColor = '#4CAF50';
                form.reset();
                showModal({ success: true });
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitBtn.textContent = 'SUBMISSION FAILED - PLEASE TRY AGAIN';
            submitBtn.style.backgroundColor = '#f44336';
            showModal({ success: false });
        } finally {
            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 2500);
        }
    });

    // File upload drag and drop
    const uploadZone = document.querySelector('.upload-zone');
    if (uploadZone) {
        const fileInput = uploadZone.querySelector('input[type="file"]');
        const uploadContent = uploadZone.querySelector('.upload-content');
        
        const displayFiles = () => {
            const files = fileInput?.files || [];
            if (files.length > 0) {
                let fileList = '<div class="file-list"><strong>Selected Files:</strong><ul>';
                for (let file of files) {
                    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
                    fileList += `<li>${file.name} (${sizeMB} MB)</li>`;
                }
                fileList += '</ul></div>';
                uploadContent.innerHTML = fileList;
                uploadContent.style.color = '#4CAF50';
            } else {
                uploadContent.innerHTML = `
                    <i class="fas fa-upload"></i>
                    <p><strong>Drag and drop files here or browse</strong></p>
                    <p class="file-hint">PDF, JPG, PNG up to 10MB</p>
                `;
                uploadContent.style.color = '';
            }
        };

        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.style.backgroundColor = 'rgba(205, 182, 141, 0.15)';
            uploadZone.style.borderColor = '#cdb68d';
        });

        uploadZone.addEventListener('dragleave', () => {
            uploadZone.style.backgroundColor = '';
            uploadZone.style.borderColor = '';
        });

        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.style.backgroundColor = '';
            uploadZone.style.borderColor = '';
            if (fileInput && e.dataTransfer.files.length) {
                fileInput.files = e.dataTransfer.files;
                displayFiles();
            }
        });

        fileInput?.addEventListener('change', displayFiles);

        uploadZone.addEventListener('click', () => {
            fileInput?.click();
        });
    }
});

