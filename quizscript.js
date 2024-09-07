document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const careerResult = document.getElementById('career-result');
    const careerLink = document.getElementById('career-link'); // Placeholder for the link

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const answers = new FormData(form);
        const result = {};

        for (const [question, answer] of answers.entries()) {
            if (!result[answer]) {
                result[answer] = 0;
            }
            result[answer]++;
        }

        // Determine the best career based on the most selected answers
        const bestCareer = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);

        let careerText = '';
        let careerPageLink = ''; // Placeholder for the link

        switch (bestCareer) {
            case 'Tech':
                careerText = 'Software Engineer or IT Specialist';
                careerPageLink = 'software-engineer.html'; 
                break;
            case 'Data':
                careerText = 'Data Scientist or Analyst';
                careerPageLink = 'data-scientist.html'; 
                break;
            case 'Design':
                careerText = 'Graphic Designer or UX/UI Designer';
                careerPageLink = 'graphic-designer.html'; 
                break;
            case 'Medical':
                careerText = 'Doctor or Nurse';
                careerPageLink = 'doctor.html'; 
                break;
            case 'Team':
                careerText = 'Project Manager or Team Leader';
                careerPageLink = 'project-manager.html'; 
                break;
            case 'Solo':
                careerText = 'Freelancer or Independent Consultant';
                careerPageLink = 'freelancer.html'; 
                break;
            case 'Both':
                careerText = 'Versatile Professional or Entrepreneur';
                careerPageLink = 'entrepreneur.html'; 
                break;
            case 'HighSchool':
                careerText = 'Entry-level Technician or Support Roles';
                careerPageLink = 'entry-level-technician.html'; 
                break;
            case 'Undergrad':
                careerText = 'Junior Analyst or Associate';
                careerPageLink = 'junior-analyst.html'; 
                break;
            case 'Postgrad':
                careerText = 'Senior Specialist or Consultant';
                careerPageLink = 'senior-specialist.html'; 
                break;
            case 'PhD':
                careerText = 'Researcher or Professor';
                careerPageLink = 'researcher.html'; 
                break;
            case 'Calm':
                careerText = 'Strategic Planner or Crisis Manager';
                careerPageLink = 'strategic-planner.html'; 
                break;
            case 'Manage':
                careerText = 'Operations Manager or Organizer';
                careerPageLink = 'operations-manager.html'; 
                break;
            case 'Delegate':
                careerText = 'Project Coordinator or Team Manager';
                careerPageLink = 'project-coordinator.html'; 
                break;
            case 'Avoid':
                careerText = 'Administrative Assistant or Support Staff';
                careerPageLink = 'administrative-assistant.html'; 
                break;
            case 'Very':
                careerText = 'Flexible Work Roles or Remote Positions';
                careerPageLink = 'flexible-work-roles.html'; 
                break;
            case 'Moderate':
                careerText = 'Balanced Roles or Hybrid Positions';
                careerPageLink = 'balanced-roles.html'; 
                break;
            case 'Somewhat':
                careerText = 'Traditional Roles with Set Hours';
                careerPageLink = 'traditional-roles.html'; 
                break;
            case 'NotImportant':
                careerText = 'Roles with Flexible Hours and High Demand';
                careerPageLink = 'flexible-hours-roles.html'; 
                break;
            case 'Technical':
                careerText = 'Engineer or IT Specialist';
                careerPageLink = 'software-engineer.html'; 
                break;
            case 'Analytical':
                careerText = 'Data Analyst or Market Researcher';
                careerPageLink = 'data-analyst.html'; 
                break;
            case 'Creative':
                careerText = 'Creative Director or Designer';
                careerPageLink = 'creative-director.html'; 
                break;
            case 'Medical':
                careerText = 'Healthcare Professional or Therapist';
                careerPageLink = 'healthcare-professional.html'; 
                break;
            case 'InPerson':
                careerText = 'Customer Service or Sales Roles';
                careerPageLink = 'customer-service.html'; 
                break;
            case 'Online':
                careerText = 'Remote Consultant or Digital Marketer';
                careerPageLink = 'digital-marketer.html'; 
                break;
            case 'Mixed':
                careerText = 'Hybrid Roles or Managerial Positions';
                careerPageLink = 'hybrid-roles.html'; 
                break;
            case 'Solo':
                careerText = 'Independent Professional or Solo Entrepreneur';
                careerPageLink = 'solo-entrepreneur.html'; 
                break;
            case 'Innovation':
                careerText = 'Innovator or Startup Founder';
                careerPageLink = 'startup-founder.html'; 
                break;
            case 'Success':
                careerText = 'Corporate Executive or High-level Manager';
                careerPageLink = 'corporate-executive.html'; 
                break;
            case 'Helping':
                careerText = 'Nonprofit Professional or Community Leader';
                careerPageLink = 'nonprofit-professional.html'; 
                break;
            case 'Security':
                careerText = 'Government or Established Industry Roles';
                careerPageLink = 'government-roles.html'; 
                break;
            case 'Research':
                careerText = 'Research Scientist or Academic';
                careerPageLink = 'research-scientist.html'; 
                break;
            case 'Design':
                careerText = 'Design Consultant or Creative Specialist';
                careerPageLink = 'design-consultant.html'; 
                break;
            case 'Management':
                careerText = 'Project Manager or Team Lead';
                careerPageLink = 'project-manager.html'; 
                break;
            case 'Support':
                careerText = 'Customer Support or Administrative Assistant';
                careerPageLink = 'customer-support.html'; 
                break;
            default:
                careerText = 'Please review your answers.';
                careerPageLink = '';
                break;
        }

        careerResult.textContent = `Based on your answers, a suitable career for you is: ${careerText}`;
        if (careerPageLink) {
            careerLink.innerHTML = `Know more about it: <a href="${careerPageLink}" target="_blank">Click here</a>`;
        } else {
            careerLink.textContent = '';
        }
        resultDiv.style.display = 'block';
    });
});
