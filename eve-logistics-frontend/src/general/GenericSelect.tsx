import { Button, Typography } from '@mui/material'
import { type GenericSelection } from './General.model'
import css from './GenericTasks.module.css'

export default function GenericSelect (props: RegionSelectProps): JSX.Element {
  const handleExtraButton = (e: any): void => {
    if (props.setExtraButtonClicked != null) {
      props.setExtraButtonClicked(true)
    }
  }

  const handleSelection = (e: any): void => {
    if (props.selections != null) {
      props.setSelection(props.selections[e.target.dataset.selection])
    }
  }

  const handleRegionSelect = (e: any): void => {
    if (props.setBackButton != null) {
      props.setBackButton(undefined)
    }
  }

  return (
    <>
      <Typography
        variant="h2"
        className={css.h2}
        style={{ marginTop: '25px', marginBottom: '10px' }}
      >
        Select a {props.title}
      </Typography>

      <div className={css.selectionList}>
        <div className={css.additionalButtons}>
          {props.extraButton != null
            ? (
            <Button
              variant="contained"
              onClick={handleExtraButton}
              style={{ width: '30%' }}
            >
              {props.extraButton.title}
            </Button>
              )
            : null}
          {props.backButtonTitle !== null
            ? (
            <Button
              variant="contained"
              onClick={handleRegionSelect}
              style={{ width: '30%' }}
            >
              {props.backButtonTitle}
            </Button>
              )
            : null}
        </div>

        {props.selections != null
          ? (
          <div>
            {props.selections.map((selection, i) => (
              <Button
                key={selection.id}
                onClick={handleSelection}
                data-selection={i}
                variant="contained"
              >
                {selection.name}
              </Button>
            ))}
          </div>
            )
          : (
          <h2>Loading...</h2>
            )}
      </div>
    </>
  )
}

interface ExtraButton {
  title: string
}

interface RegionSelectProps {
  title: string
  selections?: GenericSelection[]
  extraButton?: ExtraButton
  setSelection: (arg0: GenericSelection) => void
  setExtraButtonClicked?: (arg0: boolean) => void
  backButtonTitle?: string
  setBackButton?: (arg0: GenericSelection | undefined) => void
}
