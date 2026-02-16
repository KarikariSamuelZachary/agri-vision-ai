import pandas as pd
from pathlib import Path

new_base = '/content/data/PlantVillage'

for split in ['train', 'val', 'test']:
    df = pd.read_csv(f'../data/splits/{split}.csv')
    df['image_path'] = df['image_path'].apply(
        lambda p: str(Path(new_base) / Path(p).parent.name / Path(p).name)
    )
    df.to_csv(f'../data/splits/{split}.csv', index=False)
    print(f"{split}.csv paths updated")

print(pd.read_csv('../data/splits/train.csv')['image_path'].iloc[0])