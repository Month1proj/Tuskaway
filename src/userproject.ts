class ButtonChanger {
  private completeButton: HTMLElement;

  constructor(selector: string) {
    this.completeButton = document.querySelector(selector) as HTMLElement;
    this.completeButton.addEventListener('click', this.handleClick.bind(this));
  }

  private handleClick(event: MouseEvent): void {
    this.completeButton.innerText = 'Completed';
    this.completeButton.style.backgroundColor = 'green';
  }
}

const buttonChanger = new ButtonChanger('.inprogress');