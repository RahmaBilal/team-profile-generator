const generateTemplate = (teamMembers) => {
    const generateManagerCard = (manager) => {
      return `
  <div class="card employee-card mr-1">
      <div class="card-header bg-dark text-white">
          <h2 class="card-title">${manager.getName()}</h2>
          <h4 class="card-title"><i class="fas fa-user-tie"></i> ${manager.getRole()}</h4>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>`;
    };
  
    const generateEngineerCard = (engineer) => {
      return `
  <div class="card employee-card mr-1">
      <div class="card-header bg-dark text-white">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h4 class="card-title"><i class="fas fa-toolbox"></i> ${engineer.getRole()}</h4>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
          `;
    };
  
    const generateInternCard = (intern) => {
      return `
  <div class="card employee-card mr-1">
      <div class="card-header bg-dark text-white">
          <h2 class="card-title">${intern.getName()}</h2>
          <h4 class="card-title"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h4>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
          `;
    };

    const team = [];
  
    team.push(
      teamMembers
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManagerCard(manager))
    );
    team.push(
      teamMembers
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineerCard(engineer))
        .join("")
    );
    team.push(
      teamMembers
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateInternCard(intern))
        .join("")
    );
  
    return team.join("");
  };

  