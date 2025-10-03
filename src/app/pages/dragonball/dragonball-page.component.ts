import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    imports: [
        // NgClass
    ],
    templateUrl: './dragonball-page.component.html'
})
export class DragonBallPageComponent {
    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 15000 },
        { id: 2, name: 'Vegeta', power: 12000 },
        { id: 3, name: 'Trunks', power: 8000 },
        { id: 4, name: 'Gohan', power: 9500 },
        { id: 5, name: 'Yamcha', power: 500 },
    ])

    // powerClasses = computed(() => {
    //     return {
    //         'text-danger': true,
    //     }
    // })

    addCharacter() {
        if(!this.name() || !this.power() || this.power() <= 0) return;

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }

        this.characters.update(list => [...list, newCharacter]);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}