import UIKitCheckbox from "../Checkbox/Checkbox";


const CheckboxView = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Custom Checkbox Showcase</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UIKitCheckbox
          label="Default Blue (MD)"
          color="blue"
          size="md"
          variant="default"
        />
        <UIKitCheckbox
          label="Rounded Green (LG)"
          color="green"
          size="lg"
          variant="rounded"
        />
        <UIKitCheckbox
          label="Square Red (SM)"
          color="red"
          size="sm"
          variant="square"
        />
        <UIKitCheckbox
          label="Outline Blue (MD)"
          color="blue"
          size="md"
          variant="outline"
        />
        <UIKitCheckbox
          label="Filled Green (LG)"
          color="green"
          size="lg"
          variant="filled"
        />
        <UIKitCheckbox
          label="Disabled Red (MD)"
          color="red"
          size="md"
          variant="default"
          disabled
        />
        <UIKitCheckbox
          label="Custom Appearance"
          color="blue"
          size="md"
          variant="custom"
          customClass="bg-yellow-200 checked:bg-yellow-500 border-yellow-500"
        />
      </div>
    </div>
  );
};

export default CheckboxView;