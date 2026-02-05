const addJobForm = document.getElementById('addJobForm');
const jobList = document.getElementById('joblist');
const jobCountDisplay = document.getElementById('jobcount');

let currentCount = parseInt(jobCountDisplay.textContent);

function updateJobCount(change) {
    currentCount += change;
    jobCountDisplay.textContent = currentCount;
}

addJobForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('jobTitle').value.trim();
    const company = document.getElementById('jobCompany').value.trim();
    const location = document.getElementById('jobLocation').value.trim();
    const description = document.getElementById('jobDesc').value.trim();

    if (!title || !company || !location) {
        alert("Please fill in all required fields (Title, Company, and Location).");
        return;
    }

    const newJobArticle = document.createElement('article');
    newJobArticle.innerHTML = `
        <h3>${currentCount + 1}. ${title}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Description:</strong> ${description || 'No description provided.'}</p>
        <div class="job-actions">
            <button class="applyBtnAction">Apply Now</button>
            <button class="deleteBtnAction" style="background-color: #e74c3c; margin-left: 10px;">Delete Job</button>
        </div>
    `;

    jobList.appendChild(newJobArticle);
    updateJobCount(1);
    addJobForm.reset();
});

jobList.addEventListener('click', function (e) {
    if (e.target.classList.contains('applyBtnAction')) {
        const btn = e.target;
        btn.textContent = "Applied";
        btn.style.backgroundColor = "#27ae60";
        btn.style.cursor = "default";
        btn.disabled = true;
    }

    if (e.target.classList.contains('deleteBtnAction')) {
        const articleToRemove = e.target.closest('article');
        articleToRemove.remove();
        updateJobCount(-1);
    }
});