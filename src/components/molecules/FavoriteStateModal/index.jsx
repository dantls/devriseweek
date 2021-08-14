import React from 'react'
import { CustomText } from '~/components/atoms'
import {
  Modal,
  ModalContentContainer,
  ModalBackgroundContainer,
  FavoriteImage,
} from './styles'

import favoriteAdded from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export function FavoriteStateModal({ visible, onClose, type }) {
  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <CustomText align="center" size={28} fontFamily="bold" mt={24}>
            {`Favorito ${
              type === 'added' ? 'adicionado' : 'removido'
            } com sucesso.`}
          </CustomText>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}
