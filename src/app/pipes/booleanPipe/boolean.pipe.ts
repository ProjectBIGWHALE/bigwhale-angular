/*
  Um pipe para verificar se uma variavel tem um valor ou não no template
Exemplo: dentro do arquivo.component.ts
              export class arquivo {
                  existe!: boolean;
              }  

  dentro do arquivo.component.html 
              <div>Alguma coisa aqui </div>
                {{existe | boolean}}

 se "existe" possuir alguma propriedade sera exibida true no template 

 */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'boolean'
})
export class BooleanPipe implements PipeTransform{
    transform(value: boolean): string {
        return value ? 'True' : 'False';
    }
}