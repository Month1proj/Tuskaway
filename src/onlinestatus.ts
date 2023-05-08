class LogoutButton {
  private button: HTMLElement;

  constructor() {
    this.button = document.querySelector('.btn') as HTMLElement;
    this.button.addEventListener('click', this.handleLogoutClick);
  }

  private handleLogoutClick = (): void => {
    window.location.replace('../../html/landing/index.html');
  }
}

const logoutButton = new LogoutButton();

class showUser{
  
}