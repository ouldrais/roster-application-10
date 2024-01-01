import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IResourceTraining } from 'app/shared/model/resource-training.model';
import { getEntity, updateEntity, createEntity, reset } from './resource-training.reducer';

export const ResourceTrainingUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const resourceTrainingEntity = useAppSelector(state => state.resourceTraining.entity);
  const loading = useAppSelector(state => state.resourceTraining.loading);
  const updating = useAppSelector(state => state.resourceTraining.updating);
  const updateSuccess = useAppSelector(state => state.resourceTraining.updateSuccess);

  const handleClose = () => {
    navigate('/resource-training');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    values.activeFrom = convertDateTimeToServer(values.activeFrom);
    values.activeto = convertDateTimeToServer(values.activeto);

    const entity = {
      ...resourceTrainingEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          activeFrom: displayDefaultDateTime(),
          activeto: displayDefaultDateTime(),
        }
      : {
          ...resourceTrainingEntity,
          activeFrom: convertDateTimeFromServer(resourceTrainingEntity.activeFrom),
          activeto: convertDateTimeFromServer(resourceTrainingEntity.activeto),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="roster10App.resourceTraining.home.createOrEditLabel" data-cy="ResourceTrainingCreateUpdateHeading">
            <Translate contentKey="roster10App.resourceTraining.home.createOrEditLabel">Create or edit a ResourceTraining</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="resource-training-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('roster10App.resourceTraining.status')}
                id="resource-training-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <ValidatedField
                label={translate('roster10App.resourceTraining.level')}
                id="resource-training-level"
                name="level"
                data-cy="level"
                type="text"
              />
              <ValidatedField
                label={translate('roster10App.resourceTraining.trainer')}
                id="resource-training-trainer"
                name="trainer"
                data-cy="trainer"
                type="text"
              />
              <ValidatedField
                label={translate('roster10App.resourceTraining.activeFrom')}
                id="resource-training-activeFrom"
                name="activeFrom"
                data-cy="activeFrom"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('roster10App.resourceTraining.activeto')}
                id="resource-training-activeto"
                name="activeto"
                data-cy="activeto"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/resource-training" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ResourceTrainingUpdate;
