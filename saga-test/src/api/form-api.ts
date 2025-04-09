import { FormModel } from "../models/FormModel";
import { FetchFormParams } from "../redux/reducers/form-reducer";

export async function fetchForm(params: FetchFormParams): Promise<FormModel> {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) query.append(key, value);
  });

  const response = await fetch(`http://localhost:5291/api/sample?${query.toString()}`);
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
