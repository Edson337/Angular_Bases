import { Component, signal } from "@angular/core";
import { Character } from "../../interfaces/character.interface";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
    selector: 'dragonball-super',
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuperPageComponent {
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 15000 },
        { id: 2, name: 'Vegeta', power: 8000 },
    ])

    addCharacter(newCharacter: Character) {
        this.characters.update((list) => [...list, newCharacter]);
    }
}