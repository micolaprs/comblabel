import React from "react";
import useSolutionForm from "./useSolutionForm";
import Select from "./Select";

const SolutionForm = () => {
  const onSubmit = form => {
    console.log("submitting", form);
  };

  const {
    ncsOptions,
    handleSubmit,
    pristine,
    submitting,
    ncs,
    sequence,
    stock,
    isValidSequence,
    isValidStock,
    isValidNcs,
    sequenceClassName,
    stockClassName,
    ncsClassName
  } = useSolutionForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="ncs">NCS</label>
        <Select {...ncs.input} options={ncsOptions} className={ncsClassName} />
        {ncs.meta.touched && ncs.meta.error && (
          <span className="invalid-feedback">{ncs.meta.error}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="sequence">Sequence</label>
        <textarea
          {...sequence.input}
          placeholder="Sequence"
          className={sequenceClassName}
        />
        {sequence.meta.touched && sequence.meta.error && (
          <span className="invalid-feedback">{sequence.meta.error}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <textarea
          {...stock.input}
          placeholder="Stock"
          className={stockClassName}
        />
        {stock.meta.touched && stock.meta.error && (
          <span className="invalid-feedback">{stock.meta.error}</span>
        )}
      </div>
      <button
        type="btn btn-primary submit"
        disabled={
          pristine ||
          submitting ||
          !isValidSequence ||
          !isValidStock ||
          !isValidNcs
        }
      >
        Submit
      </button>
    </form>
  );
};

export default SolutionForm;
