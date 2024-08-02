import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Character {
  name: string;
  background: string;
  birthsign: string;
  disposition: string;
  coat: string;
  physicalDetail: string;
  pips: number;
}

interface Stats {
  level: number;
  xp: number;
  grit: number;
  hp: {
    max: number;
    current: number;
  };
  attributes: {
    strength: {
      max: number;
      current: number;
    };
    dexterity: {
      max: number;
      current: number;
    };
    willpower: {
      max: number;
      current: number;
    };
  };
}

interface Item {
  name: string;
  USAGE: number;
  uses: number;
}

interface Inventory {
  conditions: string[];
  items: Item[];
}

const CharacterForm: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    background: '',
    birthsign: '',
    disposition: '',
    coat: '',
    physicalDetail: '',
    pips: 0
  });

  const [stats, setStats] = useState<Stats>({
    level: 1,
    xp: 0,
    grit: 0,
    hp: { max: 1, current: 1 },
    attributes: {
      strength: { max: 8, current: 8 },
      dexterity: { max: 11, current: 11 },
      willpower: { max: 11, current: 11 }
    }
  });

  const [inventory, setInventory] = useState<Inventory>({
    conditions: [],
    items: [
      { name: '', USAGE: 3, uses: 3 }
    ]
  });

  const handleCharacterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleStatChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [main, sub] = name.split('.');
    if (main === 'hp') {
      setStats((prevStats) => ({
        ...prevStats,
        hp: { ...prevStats.hp, [sub]: parseInt(value) }
      }));
    } else {
      setStats((prevStats) => ({
        ...prevStats,
        [main]: parseInt(value)
      }));
    }
  };

  const handleAttributeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [attr, type] = name.split('.');
    setStats((prevStats) => ({
      ...prevStats,
      attributes: {
        ...prevStats.attributes,
        [attr]: { ...prevStats.attributes[attr as keyof Stats['attributes']], [type]: parseInt(value) }
      }
    }));
  };

  const handleInventoryChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newItems = [...inventory.items];
    newItems[index] = { ...newItems[index], [name]: value };
    setInventory({ ...inventory, items: newItems });
  };

  const addItem = () => {
    setInventory((prevInventory) => ({
      ...prevInventory,
      items: [...prevInventory.items, { name: '', USAGE: 3, uses: 3 }]
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const characterData = { character, stats, inventory };
    const jsonData = JSON.stringify(characterData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name}_character_sheet.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Character Details</h2>
      <label>
        Name:
        <input type="text" name="name" value={character.name} onChange={handleCharacterChange} required />
      </label>
      <label>
        Background:
        <input type="text" name="background" value={character.background} onChange={handleCharacterChange} required />
      </label>
      <label>
        Birthsign:
        <input type="text" name="birthsign" value={character.birthsign} onChange={handleCharacterChange} required />
      </label>
      <label>
        Disposition:
        <input type="text" name="disposition" value={character.disposition} onChange={handleCharacterChange} required />
      </label>
      <label>
        Coat:
        <input type="text" name="coat" value={character.coat} onChange={handleCharacterChange} required />
      </label>
      <label>
        Physical Detail:
        <input type="text" name="physicalDetail" value={character.physicalDetail} onChange={handleCharacterChange} required />
      </label>
      <label>
        Pips:
        <input type="number" name="pips" value={character.pips} onChange={handleCharacterChange} required />
      </label>

      <h2>Stats</h2>
      <label>
        Level:
        <input type="number" name="level" value={stats.level} onChange={handleStatChange} required />
      </label>
      <label>
        XP:
        <input type="number" name="xp" value={stats.xp} onChange={handleStatChange} required />
      </label>
      <label>
        Grit:
        <input type="number" name="grit" value={stats.grit} onChange={handleStatChange} required />
      </label>
      <label>
        HP Max:
        <input type="number" name="hp.max" value={stats.hp.max} onChange={handleStatChange} required />
      </label>
      <label>
        HP Current:
        <input type="number" name="hp.current" value={stats.hp.current} onChange={handleStatChange} required />
      </label>
      <h3>Attributes</h3>
      <label>
        Strength Max:
        <input type="number" name="strength.max" value={stats.attributes.strength.max} onChange={handleAttributeChange} required />
      </label>
      <label>
        Strength Current:
        <input type="number" name="strength.current" value={stats.attributes.strength.current} onChange={handleAttributeChange} required />
      </label>
      <label>
        Dexterity Max:
        <input type="number" name="dexterity.max" value={stats.attributes.dexterity.max} onChange={handleAttributeChange} required />
      </label>
      <label>
        Dexterity Current:
        <input type="number" name="dexterity.current" value={stats.attributes.dexterity.current} onChange={handleAttributeChange} required />
      </label>
      <label>
        Willpower Max:
        <input type="number" name="willpower.max" value={stats.attributes.willpower.max} onChange={handleAttributeChange} required />
      </label>
      <label>
        Willpower Current:
        <input type="number" name="willpower.current" value={stats.attributes.willpower.current} onChange={handleAttributeChange} required />
      </label>

      <h2>Inventory</h2>
      {inventory.items.map((item, index) => (
        <div key={index}>
          <label>
            Item Name:
            <input type="text" name="name" value={item.name} onChange={(e) => handleInventoryChange(index, e)} required />
          </label>
          <label>
            USAGE:
            <input type="number" name="USAGE" value={item.USAGE} onChange={(e) => handleInventoryChange(index, e)} required />
          </label>
          <label>
            Uses:
            <input type="number" name="uses" value={item.uses} onChange={(e) => handleInventoryChange(index, e)} required />
          </label>
        </div>
      ))}
      <button type="button" onClick={addItem}>Add Item</button>
      
      <button type="submit">Generate JSON</button>
    </form>
  );
};

export default CharacterForm;
