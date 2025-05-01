import { useState } from 'react';
import Button from '../components/Button/Button';

const Demo = () => {
  const [selectedFeature, setSelectedFeature] = useState('default');
  const [padding, setPadding] = useState('medium');
  const [margin, setMargin] = useState('none');
  const [color, setColor] = useState('#536BB8');

  const features = [
    { name: 'Default', props: { variant: 'primary', size: 'medium' } },
    { name: 'Primary', props: { variant: 'primary' } },
    { name: 'Secondary', props: { variant: 'secondary' } },
    { name: 'Outline', props: { variant: 'outline' } },
    { name: 'Danger', props: { variant: 'danger' } },
    { name: 'Small', props: { size: 'small' } },
    { name: 'Medium', props: { size: 'medium' } },
    { name: 'Large', props: { size: 'large' } },
    { name: 'Disabled', props: { disabled: true } },
    { name: 'Loading', props: { loading: true } },
  ];

  const paddingOptions = [
    { value: 'small', label: 'Small (px-2 py-1)', class: 'px-2 py-1' },
    { value: 'medium', label: 'Medium (px-4 py-2)', class: 'px-4 py-2' },
    { value: 'large', label: 'Large (px-6 py-3)', class: 'px-6 py-3' },
  ];
  const marginOptions = [
    { value: 'none', label: 'None (m-0)', class: 'm-0' },
    { value: 'small', label: 'Small (m-2)', class: 'm-2' },
    { value: 'medium', label: 'Medium (m-4)', class: 'm-4' },
  ];
  const colorOptions = [
    { value: '#536BB8', label: 'Default (#536BB8)' },
    { value: '#6A80C4', label: 'Light (#6A80C4)' },
    { value: '#3F5190', label: 'Dark (#3F5190)' },
  ];

  const currentFeature = features.find(f => f.name === selectedFeature) || features[0];
  const buttonProps = {
    ...currentFeature.props,
    className: `${paddingOptions.find(p => p.value === padding).class} ${marginOptions.find(m => m.value === margin).class}`,
    color,
  };
  const description = {
    default: 'Default button: Primary variant, medium size, #536BB8 color.',
    Primary: 'Primary variant: Solid #536BB8 background with hover effect.',
    Secondary: 'Secondary variant: White background with #536BB8 border.',
    Outline: 'Outline variant: Transparent with #536BB8 border.',
    Danger: 'Danger variant: Red background for critical actions.',
    Small: 'Small size: Compact padding and font.',
    Medium: 'Medium size: Standard padding and font.',
    Large: 'Large size: Generous padding and larger font.',
    Disabled: 'Disabled state: Reduced opacity and non-interactive.',
    Loading: 'Loading state: Shows a spinner and is non-interactive.',
  }[selectedFeature];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-[#536BB8] mb-4">Button UI Kit Demo</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6">
          {features.map(feature => (
            <button
              key={feature.name}
              onClick={() => setSelectedFeature(feature.name)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedFeature === feature.name
                  ? 'bg-[#536BB8] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {feature.name}
            </button>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex justify-center items-center">
              <Button {...buttonProps}>Click Me</Button>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-gray-700">{description}</p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Padding</label>
                <select
                  value={padding}
                  onChange={e => setPadding(e.target.value)}
                  className="w-full p-2 border border-[#536BB8] rounded-md focus:ring-[#536BB8]"
                >
                  {paddingOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Margin</label>
                <select
                  value={margin}
                  onChange={e => setMargin(e.target.value)}
                  className="w-full p-2 border border-[#536BB8] rounded-md focus:ring-[#536BB8]"
                >
                  {marginOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div className="flex gap-2">
                  {colorOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => setColor(option.value)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        color === option.value ? 'border-[#536BB8]' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: option.value }}
                      title={option.label}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;