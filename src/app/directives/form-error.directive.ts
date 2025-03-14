import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appFormError]'
})
export class FormErrorDirective implements OnInit {
  @Input() appFormError: string | null = null;  // Messaggio di errore personalizzato
  @Input() control: AbstractControl | null = null;

  private errorDiv: HTMLDivElement | null = null;  // Variabile per il div dell'errore

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.control) {  // Controlliamo che `control` non sia null
      // Subscribing to valueChanges to update error messages dynamically
      this.control.valueChanges.subscribe(() => {
        this.updateErrorMessage();  // Aggiorna il messaggio di errore
      });

      // Creiamo il div per il messaggio di errore
      this.createErrorDiv();
    }
  }

  // Crea il div per il messaggio di errore
  private createErrorDiv() {
    this.errorDiv = this.renderer.createElement('small');
    this.renderer.addClass(this.errorDiv, 'error-text');
    this.renderer.appendChild(this.el.nativeElement.parentElement, this.errorDiv);
  }

  // Funzione per aggiornare il messaggio di errore
  private updateErrorMessage() {
    if (this.errorDiv && this.control) {
      const controlErrors: ValidationErrors | null = this.control.errors;

      if (controlErrors) {
        if (controlErrors['required']) {
          this.setErrorMessage(`${this.appFormError} è obbligatorio.`);
        } else if (controlErrors['pattern']) {
          this.setErrorMessage(`${this.appFormError} può contenere solo lettere.`);
        } else {
          this.removeErrorMessage();  // Rimuovi errore se non ci sono errori
        }
      } else {
        this.removeErrorMessage();  // Rimuovi errore se non ci sono errori
      }
    }
  }

  // Aggiungi il messaggio di errore al div
  private setErrorMessage(message: string) {
    if (this.errorDiv) {
      this.renderer.setProperty(this.errorDiv, 'innerText', message);
      this.renderer.addClass(this.errorDiv, 'text-danger');
    }
  }

  // Rimuovi il messaggio di errore
  private removeErrorMessage() {
    if (this.errorDiv) {
      this.renderer.setProperty(this.errorDiv, 'innerText', '');  // Pulisce il messaggio
    }
  }
}
