export interface Disease {
  name: string
  description: string
  symptoms: string[]
  organicTreatment: string
  chemicalTreatment: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  crops: string[]
}

export const DISEASES: Record<string, Disease> = {
  'Healthy': {
    name: 'Healthy',
    description: 'The plant appears to be in healthy condition with no visible signs of disease.',
    symptoms: ['Green foliage', 'No discoloration', 'Normal growth'],
    organicTreatment: 'Maintain regular watering and fertilization schedule',
    chemicalTreatment: 'Continue standard crop maintenance protocol',
    severity: 'low',
    crops: ['Pepper', 'Potato', 'Tomato'],
  },
  'Pepper__bell__Bacterial_spot': {
    name: 'Bacterial Spot (Pepper)',
    description: 'Bacterial leaf spot is a serious disease affecting pepper plants, causing lesions on leaves and fruits.',
    symptoms: ['Dark, water-soaked lesions on leaves', 'Yellow halo around lesions', 'Lesions on fruits', 'Leaf yellowing and drop'],
    organicTreatment: 'Remove infected leaves, use copper sulfate spray, improve air circulation, avoid overhead watering',
    chemicalTreatment: 'Apply streptomycin or copper-based fungicides every 7-10 days',
    severity: 'high',
    crops: ['Pepper'],
  },
  'Pepper__bell__Healthy': {
    name: 'Healthy (Pepper)',
    description: 'Bell pepper plant showing no signs of disease or stress.',
    symptoms: ['Normal green foliage', 'Healthy fruit development'],
    organicTreatment: 'Maintain regular crop management practices',
    chemicalTreatment: 'Continue standard cultivation protocol',
    severity: 'low',
    crops: ['Pepper'],
  },
  'Potato__Early_blight': {
    name: 'Early Blight (Potato)',
    description: 'Early blight is a fungal disease that causes target-shaped lesions on potato leaves starting from the bottom.',
    symptoms: ['Target-like lesions on older leaves', 'Concentric rings on lesions', 'Yellowing of affected leaves', 'Lesions start from bottom of plant'],
    organicTreatment: 'Remove infected leaves, apply sulfur dust, improve drainage, increase spacing for air circulation',
    chemicalTreatment: 'Apply mancozeb or chlorothalonil fungicides every 7 days during growing season',
    severity: 'high',
    crops: ['Potato'],
  },
  'Potato__Healthy': {
    name: 'Healthy (Potato)',
    description: 'Potato plant showing normal healthy growth with no disease symptoms.',
    symptoms: ['Vibrant green foliage', 'Normal tuber development'],
    organicTreatment: 'Maintain standard soil management and irrigation',
    chemicalTreatment: 'Continue regular cultivation practices',
    severity: 'low',
    crops: ['Potato'],
  },
  'Potato__Late_blight': {
    name: 'Late Blight (Potato)',
    description: 'Late blight is a devastating fungal disease causing water-soaked lesions and rapid plant death during cool, wet conditions.',
    symptoms: ['Water-soaked lesions on leaves', 'White mold on leaf undersides', 'Rapid plant collapse', 'Brown tuber rot', 'Musty odor'],
    organicTreatment: 'Remove affected plants, apply copper or sulfur sprays, improve drainage, ensure good air circulation',
    chemicalTreatment: 'Apply metalaxyl or mancozeb fungicides weekly during susceptible periods',
    severity: 'critical',
    crops: ['Potato'],
  },
  'Tomato__Bacterial_spot': {
    name: 'Bacterial Spot (Tomato)',
    description: 'Bacterial spot causes dark, oily lesions on tomato leaves, stems, and fruits, spreading rapidly in warm, wet conditions.',
    symptoms: ['Dark, greasy lesions on leaves', 'Yellow halos around spots', 'Water-soaked appearance', 'Lesions on green and ripe fruits'],
    organicTreatment: 'Use copper sulfate sprays, remove infected plant parts, avoid overhead irrigation, practice crop rotation',
    chemicalTreatment: 'Apply streptomycin or oxytetracycline-based fungicides every 7-10 days',
    severity: 'high',
    crops: ['Tomato'],
  },
  'Tomato__Early_blight': {
    name: 'Early Blight (Tomato)',
    description: 'Early blight produces target-shaped lesions on lower leaves, causing defoliation and fruit exposure to sunscald.',
    symptoms: ['Brown target-shaped lesions', 'Concentric rings in lesions', 'Yellowing around lesions', 'Affects lower leaves first', 'Progressive defoliation'],
    organicTreatment: 'Remove lower leaves, apply sulfur dust, improve air circulation, mulch soil, prune for ventilation',
    chemicalTreatment: 'Apply chlorothalonil or mancozeb fungicides every 7-10 days starting early season',
    severity: 'high',
    crops: ['Tomato'],
  },
  'Tomato__Healthy': {
    name: 'Healthy (Tomato)',
    description: 'Tomato plant showing vigorous growth with no visible disease symptoms.',
    symptoms: ['Healthy green foliage', 'Normal fruit set and development'],
    organicTreatment: 'Continue regular watering and fertilizer applications',
    chemicalTreatment: 'Maintain standard crop management',
    severity: 'low',
    crops: ['Tomato'],
  },
  'Tomato__Late_blight': {
    name: 'Late Blight (Tomato)',
    description: 'Late blight causes water-soaked lesions on leaves and fruits, with rapid spread during cool, wet weather.',
    symptoms: ['Water-soaked lesions on leaves and fruits', 'Whitish mold on leaf undersides', 'Rapid necrosis', 'Fruit rot with white mold'],
    organicTreatment: 'Remove infected plants and debris, apply copper sprays, ensure good drainage and air flow',
    chemicalTreatment: 'Apply metalaxyl-M or chlorothalonil fungicides weekly during susceptible weather',
    severity: 'critical',
    crops: ['Tomato'],
  },
  'Tomato__Leaf_Mold': {
    name: 'Leaf Mold (Tomato)',
    description: 'Leaf mold is a fungal disease causing yellow spots on upper leaf surface and olive-green mold on undersides.',
    symptoms: ['Yellow patches on upper leaf surface', 'Olive-green velvety mold on undersides', 'Leaf yellowing and death', 'Affects older leaves first'],
    organicTreatment: 'Improve air circulation, reduce humidity, remove infected leaves, apply sulfur sprays, prune lower foliage',
    chemicalTreatment: 'Apply sulfur or mancozeb fungicides, improve greenhouse ventilation',
    severity: 'medium',
    crops: ['Tomato'],
  },
  'Tomato__Septoria_leaf_spot': {
    name: 'Septoria Leaf Spot (Tomato)',
    description: 'Septoria leaf spot produces small circular lesions with gray centers and dark borders, leading to severe defoliation.',
    symptoms: ['Small circular lesions with gray centers', 'Dark brown borders around lesions', 'Black spore bodies in lesion centers', 'Progressive leaf yellowing'],
    organicTreatment: 'Remove infected leaves, improve air circulation, avoid overhead watering, apply copper fungicides',
    chemicalTreatment: 'Apply mancozeb or chlorothalonil fungicides every 7-10 days throughout growing season',
    severity: 'medium',
    crops: ['Tomato'],
  },
  'Tomato__Spider_mites_Two_spotted_spider_mite': {
    name: 'Spider Mites (Tomato)',
    description: 'Two-spotted spider mites feed on plant sap, causing fine webbing and bronze discoloration on leaves.',
    symptoms: ['Fine webbing on leaves', 'Bronze or yellow stippling on leaves', 'Leaf curling and drop', 'Visible mites on leaf undersides'],
    organicTreatment: 'Spray with neem oil or insecticidal soap, increase humidity, spray water to dislodge mites, introduce predatory mites',
    chemicalTreatment: 'Apply sulfur or miticide sprays every 7 days, rotate different miticide classes',
    severity: 'medium',
    crops: ['Tomato'],
  },
  'Tomato__Target_Spot': {
    name: 'Target Spot (Tomato)',
    description: 'Target spot causes circular lesions with concentric rings on leaves, stems, and fruits.',
    symptoms: ['Circular lesions with concentric rings', 'Red-brown coloration', 'Affects all plant parts', 'Yellow halo around lesions'],
    organicTreatment: 'Remove infected plant parts, apply copper sprays, improve ventilation, practice crop rotation',
    chemicalTreatment: 'Apply mancozeb or chlorothalonil fungicides weekly',
    severity: 'medium',
    crops: ['Tomato'],
  },
  'Tomato__Tomato_mosaic_virus': {
    name: 'Tomato Mosaic Virus (ToMV)',
    description: 'Tomato mosaic virus causes mottling, leaf distortion, and stunting of plants.',
    symptoms: ['Mosaic pattern on leaves', 'Leaf mottling and distortion', 'Plant stunting', 'Deformed fruits with color patterns'],
    organicTreatment: 'Remove infected plants, sanitize tools, control aphids, use resistant varieties, practice crop rotation',
    chemicalTreatment: 'No chemical cure; focus on prevention through sanitation and insect control',
    severity: 'high',
    crops: ['Tomato'],
  },
  'Tomato__Yellow_Leaf_Curl_Virus': {
    name: 'Yellow Leaf Curl Virus (YLCV)',
    description: 'Yellow leaf curl virus causes yellowing and curling of leaves, transmitted by whiteflies.',
    symptoms: ['Yellowing of leaves', 'Leaf curling and distortion', 'Plant stunting', 'Reduced fruit set'],
    organicTreatment: 'Control whiteflies using insecticidal soap or neem oil, remove infected plants, use resistant varieties',
    chemicalTreatment: 'Control whitefly vectors with pyrethroid insecticides, practice early detection',
    severity: 'high',
    crops: ['Tomato'],
  },
}

export function getDiseaseByName(name: string): Disease | null {
  return DISEASES[name] || null
}

export function getAllDiseases(): Disease[] {
  return Object.values(DISEASES)
}

export function getCropDiseases(crop: string): Disease[] {
  return Object.values(DISEASES).filter(disease =>
    disease.crops.includes(crop)
  )
}
