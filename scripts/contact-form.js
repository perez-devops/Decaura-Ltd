/* ══════════════════════════════════════════════════════════
   DECAURA – Contact Form Handler
   Sends form submissions to info@decaurastudio.com using EmailJS
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS (free public service)
    emailjs.init('YOUR_PUBLIC_KEY_HERE');

    const form = document.getElementById('project-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';

        try {
            // Collect all form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const telephone = document.getElementById('tel').value;
            const location = document.getElementById('location').value;
            const projectType = document.querySelector('input[name="project_type"]:checked')?.value || 'Not selected';
            const investmentRange = document.getElementById('investment').value;
            const vision = document.getElementById('vision').value;
            const space = document.getElementById('space').value;

            // Send email via EmailJS
            const response = await emailjs.send(
                'service_decaura',
                'template_contact',
                {
                    to_email: 'info@decaurastudio.com',
                    client_name: name,
                    client_email: email,
                    client_phone: telephone,
                    project_location: location,
                    project_type: projectType,
                    investment_range: investmentRange,
                    vision: vision,
                    space_description: space,
                    reply_to: email
                }
            );

            if (response.status === 200) {
                // Success
                submitBtn.textContent = 'SUBMITTED SUCCESSFULLY ✓';
                submitBtn.style.backgroundColor = '#4CAF50';
                form.reset();
                
                // Show success message
                setTimeout(() => {
                    alert('Thank you for your submission! We will review your project introduction and be in touch shortly.');
                    submitBtn.textContent = originalBtnText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 1500);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitBtn.textContent = 'SUBMISSION FAILED - PLEASE TRY AGAIN';
            submitBtn.style.backgroundColor = '#f44336';
            
            // Reset after delay
            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
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

