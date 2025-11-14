// Profile editing functionality
document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    // Fields to edit
    const fields = [
        { value: 'nameValue', edit: 'nameEdit' },
        { value: 'emailValue', edit: 'emailEdit' },
        { value: 'phoneValue', edit: 'phoneEdit' },
        { value: 'idValue', edit: 'idEdit' },
        { value: 'courseValue', edit: 'courseEdit' },
        { value: 'emergencyNameValue', edit: 'emergencyNameEdit' },
        { value: 'relationshipValue', edit: 'relationshipEdit' },
        { value: 'emergencyPhoneValue', edit: 'emergencyPhoneEdit' }
    ];

    // Store original values for cancel
    let originalValues = {};

    editProfileBtn.addEventListener('click', function() {
        // Store original values
        fields.forEach(field => {
            const valueEl = document.getElementById(field.value);
            const editEl = document.getElementById(field.edit);
            originalValues[field.value] = valueEl.textContent;
            valueEl.style.display = 'none';
            editEl.style.display = 'block';
            editEl.value = valueEl.textContent;
        });

        // Show save/cancel buttons, hide edit button
        editProfileBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
        cancelBtn.style.display = 'inline-block';
    });

    saveBtn.addEventListener('click', function() {
        // Update display values with edited values
        fields.forEach(field => {
            const valueEl = document.getElementById(field.value);
            const editEl = document.getElementById(field.edit);
            valueEl.textContent = editEl.value;
            valueEl.style.display = 'block';
            editEl.style.display = 'none';
        });

        // Hide save/cancel buttons, show edit button
        editProfileBtn.style.display = 'inline-block';
        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';

        // Here you could add AJAX to save to server
        alert('Profile updated successfully!');
    });

    cancelBtn.addEventListener('click', function() {
        // Revert to original values
        fields.forEach(field => {
            const valueEl = document.getElementById(field.value);
            const editEl = document.getElementById(field.edit);
            valueEl.textContent = originalValues[field.value];
            valueEl.style.display = 'block';
            editEl.style.display = 'none';
        });

        // Hide save/cancel buttons, show edit button
        editProfileBtn.style.display = 'inline-block';
        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
    });
});

// Logout function
function logout() {
    if (confirm('Are you sure you want to log out?')) {
        // Here you could clear session/local storage
        window.location.href = 'login.html';
    }
}
