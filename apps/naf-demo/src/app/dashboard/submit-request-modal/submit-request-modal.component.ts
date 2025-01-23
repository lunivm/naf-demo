import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'naf-submit-request-modal',
  imports: [
    CommonModule,
    Button,
    DialogModule,
    InputText,
    FloatLabel,
    Select,
    Textarea,
  ],
  templateUrl: './submit-request-modal.component.html',
  styleUrl: './submit-request-modal.component.scss',
})
export class SubmitRequestModalComponent {
  visible = model(false);
}
